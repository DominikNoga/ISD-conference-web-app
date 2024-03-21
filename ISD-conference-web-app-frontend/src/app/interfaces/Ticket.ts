export interface Ticket
{
    order: number;
    Fullprice: number;
    DiscountBool: boolean;
    DiscountedPrice: number;
    TicketType: string;
    TicketDescription: string;
    DiscountExpiration: Date;
    AvailableUntil: Date;
    Color: string;
}