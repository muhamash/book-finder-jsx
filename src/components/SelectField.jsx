/* eslint-disable react/prop-types */
const SelectField = ({onSortChange}) =>
{
    const handleSort = ( event ) =>
    {
        const selectedSort = event.target.value;
        onSortChange( selectedSort );
    };
    return (
        <>
            {/* <!-- Sort --> */}
            <select
                className="cursor-pointer rounded-md border px-4 py-2 text-center text-gray-900 bg-cyan-600"
                name="sortBy"
                id="sortBy"
                onChange={handleSort}
            >
                <option value="">Sort</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="name_desc">Name (Z-A)</option>
                <option value="price_low_high">Price low high</option>
                <option value="price_high_low">Price high low</option>
            </select>
        </>
    );
};

export default SelectField;