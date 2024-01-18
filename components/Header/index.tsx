"use client"
import Image from "next/image"
import { CustomButton } from ".."


const Header = () => {

    const handleScroll = () => {

    }

    return (
        <div className="hero">
            <div className="flex-1 p-36 padding-x">
                <h1 className="hero__title">Find rent a car - quickly and easy!</h1>
                <p className="hero__subtitle">Streamine your car rental experience with our effortless booking process.</p>
                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/claureyimbg.png" alt="car image" fill className="object-contain" />
                    <div className="hero__image-overlay" />
                </div>

            </div>
        </div>
    )
}

export default Header