import { Link } from 'react-router-dom';

interface Crumb {
  title: string;
  path?: string; // optional for the last item
}

interface BreadcrumbProps {
  items: Crumb[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <ul className="flex space-x-2 rtl:space-x-reverse text-sm font-medium">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <li
            key={index}
            className="flex items-center before:content-['/'] first:before:content-none ltr:before:mr-2 rtl:before:ml-2 capitalize"
          >
            {item.path && !isLast ? (
              <Link to={item.path} className="text-primary hover:underline">
                {item.title}
              </Link>
            ) : (
              <span className="text-gray-500">{item.title}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Breadcrumb;
