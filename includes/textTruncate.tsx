import * as React from 'react';

export interface ITextTruncate {
    className?: string,
    content: string,
    maxLength: number,
}

export function TextTruncate({ content, maxLength, className }: ITextTruncate) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    const truncatedContent = content.length > maxLength
        ? `${content.replace(/<\/[^>]+(>|$)/g, "").substring(0, maxLength)}...`
        : content;


    return (
        <div
            className={`text-controll ${className ? 'card__description' : ''} ${isExpanded ? 'expanded' : ''}`}
            onClick={handleClick}
            dangerouslySetInnerHTML={{ __html: isExpanded ? content : truncatedContent }}
        />
    );
}
