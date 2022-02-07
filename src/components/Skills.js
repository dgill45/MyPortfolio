import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from '../data'


export default function Skills(){


    return(
        
        <section id = 'skills'>
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1>
                        Skills &amp; Technologies
                    </h1>

                </div>

            </div>
        </section>
    )
}