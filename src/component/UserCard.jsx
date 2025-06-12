// import Second from './Second'
function UserCard(){
      const items = [1, 2, 3];

    return(
        <>
        <nav><h1><table>gfgkjghj</table></h1></nav>
        <div  className="grid grid-cols-3 gap-6 w-[96%] mx-auto mt-6">
      {items.map((item) => (
        <div
          key={item}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
        >
          <img
            src="your-image-url-or-base64"
            alt="User"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">User #{item}</h3>
            <p className="text-sm text-gray-600">Sample description here.</p>
          </div>
        </div>
      ))}

    </div>
        </>
    )
}
export default UserCard;