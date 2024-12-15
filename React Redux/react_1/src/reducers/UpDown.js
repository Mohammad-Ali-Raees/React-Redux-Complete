

const InitialNumber = 0;

const ChangeTheNumber = (state = InitialNumber, action) => {
    switch (action.type) {
        case "Increament":
            if (state >= 10) {
                state = 10
            } else {
                return state + 1
            }

        case "Decreament":
            if (state <= 0) {
                state = 1
            } else {
                return state - 1
            }

        default: return state
    }
}

export default ChangeTheNumber;