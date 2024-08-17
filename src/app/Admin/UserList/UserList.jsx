import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../../api/users';
import Header from '../../../components/Header/Header';
import SidebarAdmin from '../SidebarAdmin';

const List = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        getAllUsers().then((response) => {
            if (response.ok) {
                const data = response.json();
                if (data._embedded && Array.isArray(data._embedded.userResponseList)) {
                    setUsers(data._embedded.userResponseList);
                } else {
                    console.error('Données reçues non valides:', data);
                }
            } else {
                console.error('Erreur lors de la récupération des utilisateurs:', response.status);
            }
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="flex min-h-screen bg-[#f3f3f3]">
            <SidebarAdmin/>
            <main className="flex-1">
                <Header title={"Utilisateurs"}/>
                <div className="flex justify-center items-center">
                    <div className="container mx-auto">
                        <h1 className="text-2xl font-bold mb-4">Liste des Utilisateurs</h1>
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="mb-4 p-2 border border-[white] w-full bg-[#ebebeb] text-[#d4d4d4] h-[50px] rounded-[20px]"
                        />
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border-b px-4 py-2 text-left">Nom</th>
                                    <th className="border-b px-4 py-2 text-left">Email</th>
                                    <th className="border-b px-4 py-2 text-left">Rôle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentUsers.map(user => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="border-b px-4 py-2 text-left">{user.name}</td>
                                        <td className="border-b px-4 py-2 text-left">{user.email}</td>
                                        <td className="border-b px-4 py-2 text-left">{user.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-4 flex justify-center">
                            <nav>
                                <ul className="flex list-style-none">
                                    {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
                                        <li key={i + 1} className="mx-1">
                                            <button
                                                onClick={() => paginate(i + 1)}
                                                className={`px-4 py-2 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                                            >
                                                {i + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};

export default List;