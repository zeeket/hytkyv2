import { NextPage } from 'next';
import Link from 'next/link';

const EventArchive: NextPage = () => {
    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#15162c]">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">Tapahtuma-arkisto</h1>
        <Link href="/">
            <p className="text-white">← Takaisin</p>
        </Link>
        </main>
        </>
    );
};

export default EventArchive;