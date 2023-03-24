import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function PageLayout() {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className='max-w-6xl mx-auto mt-10'>
                <Outlet />
            </div>
        </section>
    )
}
