// src/components/CodeInput.jsx
function CodeInput({ code, setCode }) {
    return (
      <div>
        <textarea
          rows="10"
          cols="80"
          placeholder="Please input source code..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
    );
}

export default CodeInput;