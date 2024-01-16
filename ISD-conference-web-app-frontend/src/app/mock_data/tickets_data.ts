import { Ticket } from "../interfaces/Ticket";

export const MOCK_TRACKS: Ticket[] = [
    {
        order: 1,
        Fullprice: 500,
        DiscountedPrice: 500,
        TicketType: "Presenting author",
        TicketDescription: "For Paper, Poster, or Journal-first Paper",
        DiscountExpiration: "June 30",
        Color: "#ce5858"
    },
    {
        order: 2,
        Fullprice: 500,
        DiscountedPrice: 400,
        TicketType: "Presenting author Discounted",
        TicketDescription: "For Paper, Poster, or Journal-first Paper. Students or AIS members",
        DiscountExpiration: "June 30",
        Color: "#0071B9"
    },
    {
        order: 3,
        Fullprice: 400,
        DiscountedPrice: 300,
        TicketType: "Normal ticket",
        TicketDescription: "Non-presenting participant (including non-presenting authors)",
        DiscountExpiration: "2021-01-01",
        Color: "#0071B9",
    },
    {
        order: 4,
        Fullprice: 300,
        DiscountedPrice: 200,
        TicketType: "Discouted ticked",
        TicketDescription: "Active AIS members and students Non-presenting participant (including non-presenting authors)",
        DiscountExpiration: "2021-01-01",
        Color: "#ade27c",
    },
]