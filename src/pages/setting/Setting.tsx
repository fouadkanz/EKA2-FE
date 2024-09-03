import Sidebar from '@/components/ui/sidebar';
import { Config } from '@/lib/configLoader';
import { FC } from 'react'
interface ChatPageProps {
    config: Config;
    appName: string;
  }
const Setting: FC<ChatPageProps> = ({ appName }) =>{
  return (
    <div className="md:flex md:flex-grow">
    <nav className="hidden md:block">
      <Sidebar appName={appName} />
    </nav>
    <main className="flex flex-col flex-grow p-2 text-center h-screen w-screen">
      <nav className="h-20 text-center md:hidden block">
        <Sidebar appName={appName} />
      </nav>
      <span className='text-7xl'>
        Seeting page
      </span>
    </main>

  </div>
  )
}

export default Setting