import { Ticket } from "../interfaces/Ticket";

export const MOCK_TRACKS: Ticket[] = [
    {
        order: 1,
        Fullprice: 400,
        DiscountedPrice: 300,
        TicketType: "Normal ticket",
        TicketDescription: "Non-presenting participant (including non-presenting authors)",
        DiscountExpiration: new Date(2023, 5, 14),
        AvailableUntil: new Date(2023, 5, 14),
        // Color: "#3498db",
        // Color: "#8CB9BD",
        Color: "#85A7FF",
    },
    {
        order: 2,
        Fullprice: 300,
        DiscountedPrice: 200,
        TicketType: "Discouted ticked",
        TicketDescription: "Active AIS members and students Non-presenting participant (including non-presenting authors)",
        DiscountExpiration: new Date(2023, 5, 14),
        AvailableUntil: new Date(2023, 5, 14),
        // Color: "#ade27c",
        Color: "#ECB159",
    },
]