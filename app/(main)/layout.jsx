import MainHeader from '@/components/main/header'; // Tırnak işareti eklendi

export default function MainLayout({ children }) {
    return (
        <div>
            <MainHeader />
            {children}
        </div>
    );
}
