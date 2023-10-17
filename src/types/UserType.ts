export interface UserType {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    city?: string;
    taxIdNum?: string;
    zipCode?: string;
    address?: string;
    phoneNumber: string;
    brandName:string;
    brandType: string;
    streetAdress:string;
    companyAbout: string;
    service: string
    companyEmail:string;
}

export const User: Array<UserType> = [
    {
        id:0,
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        city: '',
        taxIdNum: '',
        zipCode: '',
        address: '',
        phoneNumber: '',
        brandName:'',
        brandType:'',
        streetAdress:'',
        companyAbout: '',
        service:'',
        companyEmail: '',
    }
]

export interface UserLoginType{
    username: string,
    password: string,
}