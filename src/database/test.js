const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db)=>{
    //inserir dados

    proffyValue = {
        name: 'Kami',
        avatar: 'https://yt3.ggpht.com/a/AATXAJyTmDVKmg0ZPUKypcKxFySSL89q1DIQ_LZkQ3pylg=s100-c-k-c0xffffffff-no-rj-mo',
        whatsapp: '123123123',
        bio: 'Ex-poprayer'
    }

    classValue = {
        subject: "1",
        cost: "24"
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 2,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar as classes de um determinado proffy
    //dps trazer junto os dados desse proffy
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    // console.log(selectClassesAndProffys);

    const selectClassesSchedules  = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "2"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "420";
    `)

    console.log(selectClassesSchedules);
})