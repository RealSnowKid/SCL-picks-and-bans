import React, { useState, useEffect } from 'react'

export default function Message({ message }) {
    return (
        <div>{message.name}</div>
    )
}