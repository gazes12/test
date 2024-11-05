/* import * as React from 'react';
 */
interface INavbarProps {
    className: String,
}

export function Navbar({ className }: INavbarProps) {
    return (
        Navbar
        /*         <nav className={`navbar ${className || ''}`} ref={navRef}>
                    <div className={`navbar-content ${active ? 'active' : '' || ''}`}>
                        <div className="navbar-top">
                            <Logo className='logo__navbar' />
                        </div>
        
                        <div className="navbar-middle">
                            <ul className="navbar-list">
                                {
                                    menu ?
                                        menu.map(({ title, url, type, ID, menu_item_parent, active }, key) => (
                                            type === 'taxonomy' ?
                                                <SubItem name={title} items={menu.filter((item) => Number(item.menu_item_parent) === ID && item)} />
                                                :
                                                menu_item_parent === "0" &&
                                                <li key={key} className="navbar-item">
                                                    <Link class={`navbar-link ${active ? 'active' : ''}`} to={url}>{title}</Link>
                                                </li>
                                        ))
        
                                        :
                                        <ul className="navbar-list skeleton">
                                            <li className="navbar-item">
                                                <SkeletonTheme baseColor="#E7B501" highlightColor="#000">
                                                    <Skeleton />
                                                </SkeletonTheme>
                                            </li>
                                            <li className="navbar-item">
                                                <SkeletonTheme baseColor="#E7B501" highlightColor="#000">
                                                    <Skeleton />
                                                </SkeletonTheme>
                                            </li>
                                            <li className="navbar-item">
                                                <SkeletonTheme baseColor="#E7B501" highlightColor="#000">
                                                    <Skeleton />
                                                </SkeletonTheme>
                                            </li>
                                            <li className="navbar-item">
                                                <SkeletonTheme baseColor="#E7B501" highlightColor="#000">
                                                    <Skeleton />
                                                </SkeletonTheme>
                                            </li>
                                            <li className="navbar-item">
                                                <SkeletonTheme baseColor="#E7B501" highlightColor="#000">
                                                    <Skeleton />
                                                </SkeletonTheme>
                                            </li>
                                            <li className="navbar-item">
                                                <SkeletonTheme baseColor="#E7B501" highlightColor="#000">
                                                    <Skeleton />
                                                </SkeletonTheme>
                                            </li>
                                            <li className="navbar-item">
                                                <SkeletonTheme baseColor="#E7B501" highlightColor="#000">
                                                    <Skeleton />
                                                </SkeletonTheme>
                                            </li>
                                        </ul>
                                }
        
        
                                <li className="navbar-item--social">
                                    <a target="_blank" href="https://t.me/plitkamltp" className="navbar-link">
                                        <FaTelegram />
                                    </a>
                                </li>
                            </ul>
                        </div>
        
        
                        <div className="navbar__close">
                            <IoMdClose onClick={() => setActive(false)} />
                        </div>
                    </div >
        
                    <div className="burger" onClick={() => setActive(!active)}>
                        <RxHamburgerMenu />
                    </div>
                </nav > */
    )

}
