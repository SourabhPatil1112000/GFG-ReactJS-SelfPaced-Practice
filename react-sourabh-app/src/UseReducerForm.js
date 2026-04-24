import React, { useReducer } from 'react';

// SIMPLE EXPLANATION:
// useReducer is like a smart counter that follows your instructions
// It has 3 parts:
// 1. Current State (data)
// 2. Dispatch (send instructions)
// 3. Reducer (follows instructions to update data)

// STEP 1: Create your instructions (actions)
// These are like commands you can give
const ACTIONS = {
  SET_NAME: 'set_name',
  SET_AGE: 'set_age',
  SUBMIT: 'submit',
  RESET: 'reset'
};

// STEP 2: Create the Reducer (the rule book)
// This function decides HOW to update state based on the instruction
const formReducer = (state, action) => {
  console.log(`📢 Received instruction: ${action.type}`, action.payload || '');
  
  switch (action.type) {
    case ACTIONS.SET_NAME:
      console.log(`  → Updating name to: ${action.payload}`);
      return { ...state, name: action.payload };
      
    case ACTIONS.SET_AGE:
      console.log(`  → Updating age to: ${action.payload}`);
      return { ...state, age: action.payload };
      
    case ACTIONS.SUBMIT:
      console.log(`  → Submitting form!`);
      return { ...state, submitted: true };
      
    case ACTIONS.RESET:
      console.log(`  → Resetting form`);
      return { name: '', age: 0, submitted: false };
      
    default:
      console.log(`  → Unknown instruction!`);
      return state;
  }
};

// STEP 3: Initial data
const initialState = { 
  name: '', 
  age: 0, 
  submitted: false 
};

function UseReducerForm() {
  // STEP 4: useReducer gives us [currentData, sendInstruction]
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = () => {
    dispatch({ type: ACTIONS.SUBMIT });
  };

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  return (
    <div style={styles.container}>
      {/* Header with simple explanation */}
      <div style={styles.header}>
        <h1>🔄 Understanding useReducer</h1>
        <p>Open Console (F12) to see each instruction being processed! 👆</p>
      </div>

      {/* Simple Analogy Box */}
      <div style={styles.analogyBox}>
        <h3>🎯 Think of it like a Restaurant:</h3>
        <div style={styles.analogySteps}>
          <div>👤 <strong>You (Customer)</strong> → writes order on paper</div>
          <div style={styles.arrow}>↓</div>
          <div>📝 <strong>dispatch()</strong> → sends order to kitchen</div>
          <div style={styles.arrow}>↓</div>
          <div>👨‍🍳 <strong>Reducer</strong> → reads order and cooks food</div>
          <div style={styles.arrow}>↓</div>
          <div>🍽️ <strong>New State</strong> → food is ready!</div>
        </div>
      </div>

      {/* Current State Display */}
      <div style={styles.currentStateBox}>
        <h3>📊 Current Data (State):</h3>
        <div style={styles.stateDisplay}>
          <div>📝 Name: <strong>{state.name || '—'}</strong></div>
          <div>🎂 Age: <strong>{state.age || '—'}</strong></div>
          <div>✅ Submitted: <strong>{state.submitted ? 'YES' : 'NO'}</strong></div>
        </div>
      </div>

      {/* Form */}
      <div style={styles.formBox}>
        <h3>✏️ Fill the Form:</h3>
        
        <div style={styles.inputGroup}>
          <label>Name:</label>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ 
              type: ACTIONS.SET_NAME, 
              payload: e.target.value 
            })}
            placeholder="Enter your name"
            style={styles.input}
          />
          <p style={styles.hint}>💡 dispatch → SET_NAME instruction</p>
        </div>

        <div style={styles.inputGroup}>
          <label>Age:</label>
          <input
            type="number"
            value={state.age}
            onChange={(e) => dispatch({ 
              type: ACTIONS.SET_AGE, 
              payload: parseInt(e.target.value) || 0 
            })}
            placeholder="Enter your age"
            style={styles.input}
          />
          <p style={styles.hint}>💡 dispatch → SET_AGE instruction</p>
        </div>

        <div style={styles.buttonGroup}>
          <button onClick={handleSubmit} style={styles.submitButton}>
            📤 Submit Form
          </button>
          <button onClick={handleReset} style={styles.resetButton}>
            🔄 Reset
          </button>
        </div>

        {state.submitted && (
          <div style={styles.successMessage}>
            🎉 Form Submitted Successfully! 🎉
          </div>
        )}
      </div>

      {/* How useReducer Works - Simple Diagram */}
      <div style={styles.howItWorksBox}>
        <h3>⚙️ How useReducer Works:</h3>
        <div style={styles.workflow}>
          <div style={styles.workflowItem}>
            <span style={styles.number}>1</span>
            <span>dispatch( {'{'} type: 'SET_NAME', payload: 'John' {'}'} )</span>
          </div>
          <div style={styles.arrowRight}>→</div>
          <div style={styles.workflowItem}>
            <span style={styles.number}>2</span>
            <span>Reducer reads instruction</span>
          </div>
          <div style={styles.arrowRight}>→</div>
          <div style={styles.workflowItem}>
            <span style={styles.number}>3</span>
            <span>Returns NEW state</span>
          </div>
        </div>
      </div>

      {/* Simple Code Breakdown */}
      <div style={styles.codeBox}>
        <h3>📝 The 4 Steps to useReducer:</h3>
        
        <div style={styles.codeStep}>
          <div style={styles.stepNumber}>1️⃣</div>
          <div>
            <strong>Create Reducer Function</strong>
            <pre style={styles.pre}>
{`const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload}
    default:
      return state
  }
}`}
            </pre>
          </div>
        </div>

        <div style={styles.codeStep}>
          <div style={styles.stepNumber}>2️⃣</div>
          <div>
            <strong>Set Initial State</strong>
            <pre style={styles.pre}>
{`const initialState = { name: '', age: 0 }`}
            </pre>
          </div>
        </div>

        <div style={styles.codeStep}>
          <div style={styles.stepNumber}>3️⃣</div>
          <div>
            <strong>Call useReducer</strong>
            <pre style={styles.pre}>
{`const [state, dispatch] = useReducer(reducer, initialState)`}
            </pre>
          </div>
        </div>

        <div style={styles.codeStep}>
          <div style={styles.stepNumber}>4️⃣</div>
          <div>
            <strong>Send Instructions with dispatch</strong>
            <pre style={styles.pre}>
{`dispatch({ type: 'SET_NAME', payload: 'John' })`}
            </pre>
          </div>
        </div>
      </div>

      {/* When to Use useReducer vs useState */}
      <div style={styles.comparisonBox}>
        <h3>🤔 When to use useReducer?</h3>
        <div style={styles.comparison}>
          <div style={styles.useStateBox}>
            <strong>📱 useState (Simple)</strong>
            <p>✓ Single value</p>
            <p>✓ Simple updates</p>
            <p>✓ Example: toggle, counter</p>
          </div>
          <div style={styles.useReducerBox}>
            <strong>🔄 useReducer (Complex)</strong>
            <p>✓ Multiple related values</p>
            <p>✓ Complex state logic</p>
            <p>✓ Next state depends on previous</p>
            <p>✓ Example: forms, shopping cart</p>
          </div>
        </div>
      </div>

      {/* Console Tip */}
      <div style={styles.consoleTip}>
        💡 <strong>Open Console (F12):</strong> See every instruction as it happens!
      </div>
    </div>
  );
}

// Simple styles
const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
  },
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#FF9800',
    color: 'white',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  analogyBox: {
    backgroundColor: '#E8F5E9',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    borderLeft: '5px solid #4CAF50',
  },
  analogySteps: {
    textAlign: 'center',
    marginTop: '15px',
  },
  arrow: {
    fontSize: '20px',
    margin: '5px 0',
  },
  currentStateBox: {
    backgroundColor: '#E3F2FD',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  stateDisplay: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginTop: '10px',
  },
  formBox: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  hint: {
    fontSize: '12px',
    color: '#666',
    marginTop: '5px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  submitButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#f44336',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  successMessage: {
    marginTop: '15px',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
    textAlign: 'center',
  },
  howItWorksBox: {
    backgroundColor: '#FFF3E0',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  workflow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px',
  },
  workflowItem: {
    flex: 1,
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  arrowRight: {
    fontSize: '24px',
    color: '#FF9800',
  },
  number: {
    backgroundColor: '#FF9800',
    color: 'white',
    width: '25px',
    height: '25px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  codeBox: {
    backgroundColor: '#263238',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  codeStep: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
  },
  stepNumber: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  pre: {
    backgroundColor: '#000',
    color: '#4CAF50',
    padding: '10px',
    borderRadius: '5px',
    overflowX: 'auto',
    fontSize: '12px',
    marginTop: '5px',
  },
  comparisonBox: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  comparison: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginTop: '15px',
  },
  useStateBox: {
    backgroundColor: '#E8F5E9',
    padding: '15px',
    borderRadius: '8px',
  },
  useReducerBox: {
    backgroundColor: '#FFF3E0',
    padding: '15px',
    borderRadius: '8px',
  },
  consoleTip: {
    backgroundColor: '#FFEBEE',
    padding: '15px',
    borderRadius: '10px',
    textAlign: 'center',
    color: '#c62828',
  },
};

export default UseReducerForm;