/* eslint-disable react/prop-types */

const User = ({ user }) => {
    // eslint-disable-next-line no-unused-vars
    const { id, name, email, phone } = user;

    return (
        <div className="border rounded-lg border-gray-300 p-4 max-w-xs mx-auto">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-gray-600">Email: {email}</p>
            <p className="text-gray-600">Phone: {phone}</p>
        </div>
    );
};

export default User;
