export interface Posts {
    id: number;
    userImg: string;
    user: string;
    img: string;
    title: string;
    price: string;
    location: string;
    category: string;
}

export interface Services {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface SidebarProps {
    mdUp: boolean;
    open: boolean;
    handleButtonClick: () => void;
}

export interface InputProps {
    id: string;
    label?: string;
    type?: string;
    placeholder?: string;
    register?: any;
    value?: any;
    onChange?: (value: any) => void;
    error?: string | undefined;
    textarea?: boolean;
    className?: string;
    options?: { value: string; label: string }[];
  }