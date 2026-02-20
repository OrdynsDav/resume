const BASE_URL = "./data"

export const fetchGetUser = async () => {
    try {
        const response = await fetch(`${BASE_URL}/user.json`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchGetExperiences = async () => {
    try {
        const response = await fetch(`${BASE_URL}/experiences.json`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchGetRecords = async () => {
    try {
        const response = await fetch(`${BASE_URL}/records.json`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchGetSkills = async () => {
    try {
        const response = await fetch(`${BASE_URL}/skills.json`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchGetEducation = async () => {
    try {
        const response = await fetch(`${BASE_URL}/education.json`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchGetReviews= async () => {
    try {
        const response = await fetch(`${BASE_URL}/reviews.json`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}