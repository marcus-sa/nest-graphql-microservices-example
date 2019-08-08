load("@com_github_tmc_rules_helm//helm:helm.bzl", "helm_chart", "helm_release")

package(default_visibility = ["//visibility:public"])

helm_chart(
    name = "api-gateway-chart",
    srcs = glob(["**"]),
    update_deps = True,
)

helm_release(
    name = "api_gateway_chart_1",
    release_name = "api-gateway-release",
    chart = ":api-gateway-chart",
    values_yaml = ":values.yaml",
)
