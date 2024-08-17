import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentUserInfo from '../../utils/token';

const List = () => {
    // const nav = useNavigate();
    // useEffect(() => {
    //     if (CurrentUserInfo().role != "ADMIN") {
    //         nav("/home");
    //     } else if (CurrentUserInfo().role != "USER") {
    //         nav("/");
    //     }
    // }, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        // Exemple de données utilisateurs
        const fetchUsers = async () => {
            const data = [
                { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Main St', points: 10 },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com', address: '456 Maple Ave', points: 20 },
                { id: 3, name: 'Alice Johnson', email: 'alice@example.com', address: '789 Oak Dr', points: 15 },
                { id: 4, name: 'Bob Brown', email: 'bob@example.com', address: '101 Pine Ln', points: 25 },
                { id: 5, name: 'Charlie White', email: 'charlie@example.com', address: '202 Birch Blvd', points: 30 },
                { id: 6, name: 'David Black', email: 'david@example.com', address: '303 Cedar Ct', points: 5 },
                { id: 7, name: 'Eve Blue', email: 'eve@example.com', address: '404 Elm St', points: 18 },
                { id: 8, name: 'Frank Green', email: 'frank@example.com', address: '505 Spruce Rd', points: 22 },
                { id: 9, name: 'Grace Pink', email: 'grace@example.com', address: '606 Fir Ave', points: 28 },
                { id: 10, name: 'Hank Yellow', email: 'hank@example.com', address: '707 Redwood Dr', points: 12 },
                // Ajoutez plus d'utilisateurs si nécessaire
            ];
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Liste des utilisateurs</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 border-[#cad0d2] rounded w-1/3"
                />
            </div>
            <table className="min-w-full bg-white border border-gray-300 border-[#cad0d2]">
                <thead>
                    <tr className="bg-gray-100 ">
                        <th className="border-b border-[#cad0d2] px-4 py-2 text-left">Nom</th>
                        <th className="border-b border-[#cad0d2] px-4 py-2 text-left">Email</th>
                        <th className="border-b border-[#cad0d2] px-4 py-2 text-left">Adresse</th>
                        <th className="border-b border-[#cad0d2] px-4 py-2 text-left">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {currentUsers.map(user => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="border-b border-[#cad0d2] px-4 py-2 text-left">{user.name}</td>
                            <td className="border-b border-[#cad0d2] px-4 py-2 text-left">{user.email}</td>
                            <td className="border-b border-[#cad0d2] px-4 py-2 text-left">{user.address}</td>
                            <td className="border-b border-[#cad0d2] px-4 py-2 text-left">{user.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-end">
                <nav>
                    <ul className="flex list-style-none ">
                        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
                            <li key={i + 1} className="mx-1">
                                <button
                                    onClick={() => paginate(i + 1)}
                                    className={`px-4 py-2 border border-[#cad0d2] rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                                >
                                    {i + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default List;
