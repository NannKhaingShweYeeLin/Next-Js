import Link from "next/link";
const Links = () => {
 
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {   title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/posts",
        },
    ];
 
    return (
    <div>
     {links.map(link=>
                <Link href={`${item.path}`}>{item.title}</Link>
        ))}
    </div>
  )
}

export default Links
