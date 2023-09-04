'use client'
import React from 'react'
import UI from './ui'
import { Decode } from './scoreCoding'

export default function Share({ params }) {
    return <>
        <UI score={Decode(params.score)}/>
    </>;
}