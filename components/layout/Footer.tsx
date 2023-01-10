import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCaretUpFill } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";

export type FooterCategory = {
    title: string;
    items: FooterItem[];
};

export type FooterItem = {
    label: string;
    href: string;
    newWindow?: boolean;
};

export function Footer({ categories }: { categories: FooterCategory[] }) {
    return (
        <div className="max-w-[90rem] mx-auto p-6 mt-6">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div
                    className={clsx(
                        "flex flex-row gap-2 h-fit items-center mx-auto order-last mt-5",
                        "sm:mx-0 sm:order-first sm:mt-0"
                    )}
                >
                    <Image
                        alt="logo"
                        src="/logo_128x128.png"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <h1 className="font-bold text-xl">Yeecord</h1>
                </div>
                {categories.map((category, i) => (
                    <Category key={i} category={category} />
                ))}
            </div>
            <p className="text-secondary mt-10">
                YEE式機器龍 © 2019 ~ {new Date(Date.now()).getFullYear()}
            </p>
        </div>
    );
}

function Category({ category }: { category: FooterCategory }) {
    const [extend, setExpend] = useState(false);

    return (
        <div className="flex flex-col">
            <h3
                className="heading-md mb-2 cursor-pointer"
                onClick={() => setExpend((prev) => !prev)}
            >
                {category.title}{" "}
                <BsCaretUpFill
                    className={clsx(
                        "inline sm:hidden transition-transform",
                        extend ? "rotate-0" : "rotate-180"
                    )}
                />
            </h3>
            <div
                className={clsx(
                    "flex-col gap-1",
                    extend ? "flex" : "hidden sm:flex"
                )}
            >
                {category.items.map((item, j) => (
                    <Link
                        key={j}
                        href={item.href}
                        className="text-secondary"
                        target={item.newWindow === true ? "_blank" : "_self"}
                    >
                        {item.label}{" "}
                        {item.newWindow && <IoMdOpen className="inline" />}
                    </Link>
                ))}
            </div>
        </div>
    );
}
