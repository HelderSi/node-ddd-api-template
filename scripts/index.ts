import addModule from './addModule'
import addRepository from './addRepository';
import addUseCase from './addUseCase';


const action = process.argv[2];
const target = process.argv[3];


const cmds = {
    'add': {
        'module': addModule,
        'usecase': addUseCase,
        'repository': addRepository,
        'provider': () => { },
    }
}

const targetCmd = cmds[action][target]

if (!targetCmd) {
    console.log('command not found')
    process.exit(1)
} else {
    targetCmd.execute(process.argv.slice(4))
}