const SelectField = () =>
{
    return (
        <>
            {/* <!-- Sort --> */}
            <select
                className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-900 bg-cyan-600"
                name="sortBy"
                id="sortBy"
            >
                <option value="">Sort</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="year_asc">Publication Year (Oldest)</option>
                <option value="year_desc">Publication Year (Newest)</option>
            </select>
        </>
    );
};

export default SelectField;