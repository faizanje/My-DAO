import Input from '../../../elements/Input'

export default function CreateUserForm({ handleChange, handleSubmit }) {
    return (
        <form onChange={handleChange} onSubmit={handleSubmit}>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <Input label="First Name"
                    type="text"
                    name="firstName"
                    icons="fa-solid fa-user"
                    placeholder="First Name"
                />
                <Input label="Last Name"
                    type="text"
                    name="lastName"
                    icons="fa-solid fa-user"
                    placeholder="Last Name"
                />
                <Input label="Phone"
                    type="number"
                    name="phone"
                    icons="fa-solid fa-phone"
                    placeholder="Phone"
                />
                <Input label="Email"
                    type="email"
                    name="email"
                    icons="fa-solid fa-envelope"
                    placeholder="Email"
                />
                <Input label="Job Title"
                    type="text"
                    name="jobTitle"
                    icons="fa-solid fa-user-doctor"
                    placeholder="Job Title"
                />
                <Input label="Team"
                    type="text"
                    name="teamName"
                    icons="fa-solid fa-briefcase"
                    placeholder="Team"
                />
                <Input label="Business"
                    type="text"
                    name="business"
                    icons="fa-solid fa-business-time"
                    placeholder="Business"
                />
                <Input label="City"
                    type="text"
                    name="city"
                    icons="fa-solid fa-city"
                    placeholder="City"
                />
                <Input label="Address"
                    type="text"
                    name="address"
                    icons="fa-solid fa-location-dot"
                    fullWidth
                    placeholder="Address"
                />
                <Input label="wallet"
                    type="text"
                    name="wallet"
                    icons="fa-solid fa-wallet"
                    fullWidth
                    placeholder="2X1200124X.."
                />
                <Input type="password"
                    name="password"
                    label="Password"
                    icons="fa-solid fa-lock"
                    placeholder="Password"
                />
                <Input type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    icons="fa-solid fa-lock"
                    placeholder="Confirm Password"
                />
            </div>
        </form>
    )
}
