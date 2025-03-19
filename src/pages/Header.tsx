interface HeaderProps {
    title: string;
  }
  
  const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className='bg-gray-800 bg-opacity-50 w-[100%] backdrop-blur-md shodow-lg border-b border-gray-700 py-5'>
        <h1 className='text-2xl font-semibold text-gray-100 pl-10'>{title}</h1>
    </header>
  )
}

export default Header