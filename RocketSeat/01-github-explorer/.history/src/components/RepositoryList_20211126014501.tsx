import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

interface Repository {
    name: string;
}


export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    // o que fazer e quando fazer, useEffect é uma trigger
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())  //transforma os dados em Json
            .then(data => setRepositories(data))  // seta o que está em data na variável set repository
    }, []);

    //console.log(repositories);


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return (
                        <RepositoryItem key={repository.name} repository={repository} />
                    )
                })}

            </ul>

        </section>
    );

}