type AppBarItemProps = {
    name : string,
}

export default function AppBarMenuItem({name} : AppBarItemProps) {
    return (
        <div className="mx-5">
            <a className="text-lg">{name}</a>
        </div>
    );
};
