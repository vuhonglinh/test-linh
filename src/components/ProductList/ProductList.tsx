import React, { startTransition, useDeferredValue, useEffect, useState, useTransition } from 'react'

const ProductCards = ({ name }: { name: string }) => {
    const [products, setProduct] = useState<string[]>([])

    useEffect(() => {
        const SIZE = 19999
        const result = []
        for (let i = 0; i < SIZE; i++) {
            result.push(name)
        }
        setProduct(result)
    }, [name])

    return (
        <div>
            {products.map((product, index) => (
                <div key={index}>{product}</div>
            ))}
        </div>
    )
}


export default function ProductList() {

    const [name, setName] = useState<string>('')
    const [deferredName, setDeferredName] = useState<string>('')
    const [pending, startTransition] = useTransition()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setName(value)

        startTransition(() => {
            setDeferredName(value)
        })
    }
    console.log(pending)
    // const deferredName = useDeferredValue(name)
    console.log(deferredName)
    return (
        <div>
            <h1>Products List</h1>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder='Enter...'
                autoFocus
            />
            {pending ? <div>Loading...</div> : <ProductCards name={deferredName} />}
        </div>
    )
}
