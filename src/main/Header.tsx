type Args = {
    subtitle: string
}

const Header = ({ subtitle }: Args) => {
    return (
        <div className="navbar navbar-expand-lg">
            <div>
                <div className="logo">BreweryBrand</div>
                <div className="mt-1 subtitle">{subtitle}</div>
            </div>
        </div>
    )
}

export default Header;