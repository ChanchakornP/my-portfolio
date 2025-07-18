import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number;
    strokeWidth?: number;
    fill?: string;
}

