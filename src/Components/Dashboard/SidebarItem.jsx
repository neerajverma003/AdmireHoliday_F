import { Link } from 'react-router-dom';

const SidebarItem = ({ Icon, title, path, count, active, onClick, className = '' }) => {
  const baseClasses = "group flex items-center px-2 py-2 text-sm font-medium rounded-md";
  const inactiveClasses = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";
  const activeClasses = "bg-gray-100 text-gray-900";
  
  const content = (
    <>
      <Icon className={`mr-3 h-5 w-5 ${active ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'}`} />
      {title}
      {count && (
        <span className="ml-auto inline-block py-0.5 px-3 text-xs rounded-full bg-indigo-100 text-indigo-800">
          {count}
        </span>
      )}
    </>
  );

  return path ? (
    <Link
      to={path}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses} ${className}`}
    >
      {content}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${baseClasses} ${active ? activeClasses : inactiveClasses} ${className} w-full text-left`}
    >
      {content}
    </button>
  );
};

export default SidebarItem;