
import React from 'react'
import siteConfig from '@/config/siteConfig'

function SideNavbar() {
    return (
        <div>
            <aside>
                <div className=''>
                    {siteConfig.NavConfig.map((section, index) => (
                        <div key={index}>
                            {section.map((item, i) => (
                                <div key={i}>
                                    {('name' in item) ? (
                                        <a href={item.path}>{item.name}</a>
                                    ) : (
                                        Object.entries(item).map(([key, value]) => (
                                            <div key={key}>
                                                <p>{key}</p>
                                                {value.map((subItem: { path: string, name: string }, subIndex: number) => (
                                                    <a key={subIndex} href={subItem.path}>
                                                        {subItem.name}
                                                    </a>
                                                ))}
                                            </div>
                                        ))
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}                       
                </div>

            </aside>
        </div>
    )
}

export default SideNavbar