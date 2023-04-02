import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function PageLayout() {
    return (
        <section>
            <div>
                <Navbar />
            </div>
            <div className='max-w-6xl mx-auto mt-32'>
                <Outlet />
            </div>
        </section>
    )
}
