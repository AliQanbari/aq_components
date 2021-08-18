import React from "react";

type AppBarItemProps = {
    name : string,
    href? : string,
}

export default function AppBarMenuItem({name, href} : AppBarItemProps) {
    return (
        <div className="mx-5">
            <a href={href} className="text-lg">{name}</a>
        </div>
    );
};
