import Select from "react-select";
import useSWR from "swr";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

function ModelSelection() {
	const { data: models, isLoading } = useSWR("models", fetchModels);
	const { data: model, mutate: setModel } = useSWR("model", {
		fallbackData: "gemini-2.0-flash-001",
	});

	// Custom styles for react-select
	const customStyles = {
		control: (provided: any) => ({
			...provided,
			backgroundColor: "#434654",
			border: `1px solid #434654`,
			color: "#fff",
		}),
	};

	return (
		<div className="mt-2">
			<Select
				className="mt-2"
				options={models?.modelOptions}
				defaultValue={model}
				placeholder={model}
				isSearchable
				isLoading={isLoading}
				menuPosition="fixed"
				styles={customStyles}
				onChange={(e) => setModel(e.value)}
			/>
		</div>
	);
}

export default ModelSelection;
