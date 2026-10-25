import React from "react";
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { SwissGridOverlay } from "./SwissGridOverlay";

interface NavItem {
    label: string;
    href: string;
    count?: string;
}

const NAV_ITEMS: NavItem[] = [
    {label: 'Home', href: '#home'},
    {label: 'Story', href: '#story'},
    {label: 'Work', href: '#work', count: '04'},
    {label: 'Logs', href: '#logs', count: '06'},
    {label: 'Contact', href: '#contact'},
];

export