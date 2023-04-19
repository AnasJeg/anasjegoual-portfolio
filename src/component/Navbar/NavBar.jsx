import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import mylog from "../../image/mylog.png";
import { Menubar } from 'primereact/menubar';


export default function NavBar() {
    const navigate = useNavigate();
   // const pages = ["Home","About me", "Education", "Experience", "Projects", "Certifications", "Contact"];
    const pages = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-user',
            command: () => {navigate('/') }
        },
        {
            label: 'Education',
            icon: 'pi pi-fw pi-book',
            command: () => {navigate('/Education') }

        },
        {
            label: 'Experience',
            icon: 'pi pi-spin pi-spinner',

        },
        {
            label: 'Projects',
            icon: 'pi pi-fw pi-slack',

        },
        {
            label: 'Certifications',
            icon: 'pi pi-fw pi-verified',

        },
        {
            label: 'Resume',
            icon: 'pi pi-fw pi-print',

        },
        {
            label: 'About me',
            icon: 'pi pi-fw pi-user',

        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-mobile',
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
                <Menubar end={end} style={{
                    backgroundColor: '#F6F1E9',
                    color: '#DAF5FF',
                    borderRadius: "20px",
                    justifyContent: 'left'
                }} model={pages} />
  
            </div>
        </div>
    );

}

