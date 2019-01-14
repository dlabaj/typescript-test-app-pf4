import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
/**
 * Column properties.
 */
export interface AvatarProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    /** Additional classes added to the Avatar. */
    className?: string;
    /** Attribute that specifies the URL of the image for the Avatar. */
    src?: string;
    /** Attribute that specifies the alt text of the image for the Avatar. */
    alt: string;
}
declare const Avatar: React.SFC<AvatarProps>;
export default Avatar;