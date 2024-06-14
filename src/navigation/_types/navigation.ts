import { Book } from "../../types/book";

export type AppRoutes = {
    Login: undefined;
    Register: undefined;
    termsOfUse: undefined;
    privacyPolicy: undefined;
    Home: undefined;
    BookUnity: { book: Book };
};