import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import mylog from "../../image/mylog.png";
import { Menubar } from 'primereact/menubar';

export default function NavBar() {
    const navigate = useNavigate();
    const pages = [
        {
            label: 'Accueil',
            icon: 'pi pi-fw pi-user',
            command: () => { navigate('/') }
        },
        {
            label: 'Formations',
            icon: 'pi pi-fw pi-book',
            command: () => { navigate('/Formations') }

        },
        {
            label: 'Experiences',
            icon: 'pi pi-spin pi-spinner',
            command: () => { navigate('/Experiences') }

        },
        {
            label: 'Projets',
            icon: 'pi pi-fw pi-folder-open',
            command: () => { navigate('/Projets') }

        },
        {
            label: 'Certifications',
            icon: 'pi pi-fw pi-verified',
            command: () => { navigate('/Certifications') }

        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-envelope',
            command: () => { navigate('/Contact') }
        }
    ];


    const end = (
        <img
            alt="AnasJ"
            src={mylog}
            width="50"
            className="mr-2"
        />
    );
    useEffect(() => {
        const handlePopstate = () => {
            navigate('/');
        };
        window.addEventListener('popstate', handlePopstate);
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, [navigate]);

    return (
        <div>
            <div className="card">
                <Menubar end={end}
                    style={{
                        backgroundColor: '#F6F1E9',
                        color: '#DAF5FF',
                        borderRadius: "20px",
                        justifyContent: "center",
                        alignContent: "center"
                    }}
                    model={pages} />

            </div>
        </div>
    );

}

