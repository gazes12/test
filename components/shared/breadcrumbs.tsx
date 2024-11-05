import * as React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { pagesList } from '@/lib/pages';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


interface IBreadcrumbsProps {
}

export function Breadcrumbs(props: IBreadcrumbsProps) {
    const pathname = usePathname();
    const slugs = pathname.split('/');

    const [breadcrumbs, setBreadcrumbs] = React.useState([]);

    React.useEffect(() => {
        const createBreadcrumbs = (pathSlugs) => {
            let crumbs = [];
            let currentPath = '';

            for (const slug of pathSlugs) {
                currentPath += slug !== '' ? `/${slug}` : '';
                const page = findPage(currentPath);
                crumbs.push({
                    name: page.name,
                    link: page.link,
                });
            }

            return crumbs;
        };

        const findPage = (path) => {
            if (path === '') path = '/';

            const page = pagesList.find(page => page.link === path); //сначала ищем точное совпадение
            if (page) {
                return page;
            }

            // Ищем среди страниц с подстраницами
            for (const p of pagesList) {
                if (p.sub) {
                    const parts = path.split('/');
                    const slug = parts[parts.length - 1]; // Извлекаем slug из последней части пути
                    return {
                        name: convertToTitleCase(decodeURI(slug)),
                        link: path,
                    };
                }
            }
        }

        const breadcrumbsData = createBreadcrumbs(slugs);
        setBreadcrumbs(breadcrumbsData);
    }, [pathname]);

    function convertToTitleCase(str) {
        // Разделяем строку по символу '-'
        const words = str.split('-');

        // Преобразуем каждое слово к правильному регистру
        const formattedWords = words.map(word => {
            // Приводим первую букву к верхнему регистру, остальные к нижнему
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });

        // Объединяем слова обратно в строку с пробелами
        return formattedWords.join(' ');
    }


    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumb-item">
                        <Link href={crumb.link}>{crumb.name}</Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
