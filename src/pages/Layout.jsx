import {Outlet, Link} from "react-router-dom";

const menuList = [
    {
        link: "home",
        name: "Home"
    },
    {
        link: "contact",
        name: "Contact"
    },
    {
        link: "404Page",
        name: "NoPage"
    },
];
const listItems = menuList.map((menu) =>
    <li>
        <Link to={menu.link}>
            {menu.name}
        </Link>
    </li>
);


const Layout = () => {
    return (
        <>
         <nav>
             <ul>
                 {listItems}
             </ul>
         </nav>
         <Outlet />
        </>
    )
}
export default Layout;
