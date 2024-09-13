// adapted from https://github.com/sibartlett/colonizers
export class MathHelper {
    static round(number, dp) {
        var dp2 = Math.pow(10, dp);
        return Math.round(number * dp2) / dp2;
    }

    static getAngle(p1, p2) {
        return (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
    }

    static getDistance(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    static getEndpoint(origin, angle, distance) {
        var radians = (angle * Math.PI) / 180;
        return {
            // dividing by 2 here makes the edges in the right places, but the corners to be wrong
            x: MathHelper.round((origin.x + distance * Math.sin(radians))/1, 3),
            y: MathHelper.round((origin.y + distance * Math.cos(radians))/1, 3),
        };
    }
}
