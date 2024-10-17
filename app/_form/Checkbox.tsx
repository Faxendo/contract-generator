interface CheckboxProps {
    id: string;
    name: string;
}

export default function Checkbox({ id, name }: CheckboxProps) {
    return (
        <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 dark:text-white" htmlFor={id}>
                {name}
            </label>
            <input
                id={id}
                name={id}
                className="mt-1 py-1 px-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
        </div>
    )
}